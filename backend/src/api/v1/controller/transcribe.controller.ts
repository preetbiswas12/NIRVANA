import type { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../../../helper/errorResponse';
import { genAI } from '../../../lib/gemini';
import { TEXT_GENERATION_MODEL } from '../../../constants/llms';
import fs from 'fs';

export const transcribe = async (req: Request, res: Response, next: NextFunction) => {
   try {
      if (!req.file) {
         return next(new ErrorResponse('No audio file uploaded', 400));
      }

      const filePath = req.file.path;
      const audioData = fs.readFileSync(filePath);
      const base64Audio = audioData.toString('base64');

      const model = genAI.getGenerativeModel({ model: TEXT_GENERATION_MODEL });
      
      const result = await model.generateContent([
         {
            inlineData: {
               data: base64Audio,
               mimeType: req.file.mimetype,
            },
         },
         { text: 'Transcribe this audio file. Provide only the transcription text without any additional commentary.' },
      ]);

      fs.unlinkSync(filePath);

      res.status(200).json({
         success: true,
         message: 'Transcribed successfully',
         data: result.response.text(),
      });
   } catch (error) {
      console.error(error);
      next(new ErrorResponse(error, 500));
   }
};
