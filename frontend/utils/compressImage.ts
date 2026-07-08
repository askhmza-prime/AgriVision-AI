export function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");

        const maxWidth = 1024;
        const scale = maxWidth / img.width;

        canvas.width = maxWidth;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");

        ctx?.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        canvas.toBlob(
          (blob) => {
            if (!blob) return;

            resolve(
              new File(
                [blob],
                file.name,
                {
                  type: "image/jpeg",
                }
              )
            );
          },
          "image/jpeg",
          0.8
        );
      };

      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}
