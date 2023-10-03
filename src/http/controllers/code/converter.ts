import { MakeConvertCode } from "@/use-cases/factories/make-convert-code";
import { Request, Response } from "express";
import { z } from "zod";

export async function coverter(req: Request, res: Response) {
  const converterBodySchema = z.object({
    html: z.string(),
    section: z.string(),
  });

  const { html, section } = converterBodySchema.parse(req.body);

  try {
    const { getCodeConverterUseCase } = MakeConvertCode();

    const codeConverted = await getCodeConverterUseCase.execute({
      html,
      section
    })

    let codeConvertedString:any;

    if (typeof codeConverted === 'string') {
        codeConvertedString = codeConverted;
    } else {
        codeConvertedString = JSON.stringify(codeConverted);
    }

    const regex = /{%\s*if[^%]*%}(.*?){%-\s*endif\s*%}/gs;
    
    const codeConvertedImages = codeConvertedString.replace(regex, '<img src="" alt="Descrição da Imagem">')

    const codeConvertedJSON = JSON.stringify({ codeConvertedImages })

    return res.status(200).json(codeConvertedJSON);

  } catch (error) {
    throw error;
  }
}