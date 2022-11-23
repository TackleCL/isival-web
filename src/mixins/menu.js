
export default {
  data: () => ({
    items: [
      { title: "Inicio", to: { path: "/" } },
      { title: "Nosotros", to: { name: "About" } },
      { title: "Rental", to: { name: "Rental" } },
      { title: "Repuestos", to: { name: "Parts" } },
    ],
  }),
}