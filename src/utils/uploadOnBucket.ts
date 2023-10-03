import axios from "axios";
import { supabase, supabaseStorageURL } from "@/libs/supabase";

export async function uploadOnBucket(imageUrl: string) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    const { data, error } = await supabase.storage.from('uploads').upload(`liquifi-${Date.now()}.png`, response.data);

    if (error) {
      throw new Error(error.message)
    }

    return `${supabaseStorageURL}/${data.path}`
}