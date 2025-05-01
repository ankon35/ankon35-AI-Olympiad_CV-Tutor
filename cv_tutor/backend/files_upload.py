# backend/files_upload.py

import os
import shutil
from fastapi import UploadFile
import env

CV_FILE = env.CV_FILE_DIR
JD_FILE = env.JD_FILE_DIR

# Make sure folders exist
os.makedirs(CV_FILE, exist_ok=True)
os.makedirs(JD_FILE, exist_ok=True)

async def save_uploaded_files(pdf_file: UploadFile, jd_text: str):
    # Save PDF
    pdf_path = os.path.join(CV_FILE, "resume.pdf")
    with open(pdf_path, "wb") as buffer:
        shutil.copyfileobj(pdf_file.file, buffer)

    # Save JD text
    jd_path = os.path.join(JD_FILE, "jd.txt")
    with open(jd_path, "w", encoding="utf-8") as f:
        f.write(jd_text)

    return {"message": "Files uploaded successfully"}
