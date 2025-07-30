import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from './constants';

const geminiai = new GoogleGenAI({ 
  apiKey: GEMINI_API_KEY });

export default geminiai;
