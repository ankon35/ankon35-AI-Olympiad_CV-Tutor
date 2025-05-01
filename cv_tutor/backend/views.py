import os
from pyexpat import model
from fastapi import APIRouter, File, Form, UploadFile

from model import Model
from files_upload import save_uploaded_files

api = APIRouter(prefix="/api")

@api.get("/hello")
def hello():
    return {"message": "Hello, Anon!"}

@api.post("/upload_files")
async def upload_files(pdf_file: UploadFile = File(...), jd_text: str = Form(...)):
    return await save_uploaded_files(pdf_file, jd_text)

@api.post("/process_resume")
async def process_resume(action: str = Form(...)):
    return Model.process_resume(action)