from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from email.message import EmailMessage
import aiosmtplib
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailSchema(BaseModel):
    first_name: str
    last_name: str
    phone: str = None
    subject: str
    email: EmailStr
    message: str

@app.post("/send-email")
async def send_email(payload: EmailSchema):
    full_name = f"{payload.first_name} {payload.last_name}"
    msg = EmailMessage()
    msg["From"] = os.getenv("EMAIL_USERNAME")
    msg["To"] = os.getenv("EMAIL_RECEIVER")
    msg["Subject"] = payload.subject
    msg.set_content(
        f"From: {full_name} <{payload.email}>\n"
        f"Phone: {payload.phone or 'N/A'}\n\n"
        f"Message:\n{payload.message}"
    )

    try:
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=os.getenv("EMAIL_USERNAME"),
            password=os.getenv("EMAIL_PASSWORD"),
        )
        return {"message": "Email sent successfully!"}
    except Exception as e:
        print(f"Email send failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email.")
