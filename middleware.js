export { default } from "next-auth/middleware";

export const config = { matcher: ["/main", "/main/products", "/main/admin/product", "/main/products/([a-zA-Z0-9-_]+)", "/main/admin/add", "/main/about", "/main/contact", "/main/faq"] };
