const z = require("zod");

const userSchema = z.object({
  userId: z.number("id должен быть числом").min(1, { message: "id не может быть пустым" }),
  title: z
    .string("Заголовок должен быть непустой строкой")
    .nonempty("Заголовок должен быть непустой строкой")
    .min(1, {message: "Заголовок должен быть непустой строкой"} ),
  body: z.string("Тело должно быть строкой").optional(),
});
const validatePostData = (data) => {
  const validatedData = userSchema.safeParse(data);
  if (validatedData.success) {
    return {success: true, data: validatedData.data};
  } else {
    return {success: false, errors: JSON.parse(validatedData.error.message)};
  }
};

module.exports = validatePostData;