# backend/model.py

import os
import shutil
import google.generativeai as genai
import PyPDF2 as pdf
import env
from prompt import *  # Import the prompt functions

CV_FILE = env.CV_FILE
JD_FILE = env.JD_FILE

genai.configure(api_key=env.GOOGLE_API_KEY)

class Model:
    @staticmethod
    def get_gemini_response(prompt):
        model_instance = genai.GenerativeModel(env.MODEL)
        response = model_instance.generate_content(prompt)
        return response.text

    @staticmethod
    def extract_text_from_pdf(resume_file_path):
        with open(resume_file_path, 'rb') as file:
            reader = pdf.PdfReader(file)
            text = ""
            for page in range(len(reader.pages)):
                page_text = reader.pages[page].extract_text()
                text += str(page_text)
        return text

    @staticmethod
    def load_job_description(job_description_file_path):
        with open(job_description_file_path, 'r', encoding='utf-8') as file:
            return file.read()

    @staticmethod
    def process_resume(action: str):
        if action not in ["match", "skills_suggestion", "question_generation", "project_suggestion", "draft_cover_letter", "draft_email"]:
            return {"error": "Invalid action. Choose 'match', 'skills_suggestion', 'question_generation', 'project_suggestion', 'draft_cover_letter', or 'draft_email'."}
        
        job_desc = Model.load_job_description(JD_FILE)
        resume_text = Model.extract_text_from_pdf(CV_FILE)
        
        # Choose the appropriate prompt function based on the action
        if action == "match":
            prompt = match_prompt(job_desc, resume_text)
        elif action == "skills_suggestion":
            prompt = skills_suggestion_prompt(job_desc, resume_text)
        elif action == "question_generation":
            prompt = question_generation_prompt(job_desc, resume_text)
        elif action == "project_suggestion":
            prompt = project_suggestion_prompt(job_desc, resume_text)
        elif action == "draft_cover_letter":
            prompt = draft_cover_letter_prompt(job_desc, resume_text)
        elif action == "draft_email":
            prompt = draft_email_prompt(job_desc, resume_text)
        
        response_text = Model.get_gemini_response(prompt)
        return {"result": response_text}
