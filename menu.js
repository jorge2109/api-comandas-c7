const menu = [
    {
        bebidas_calientes: [
            {
                nombre: "Cafe Americano",
                descripcion: "Café Clásico Americano",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 40
                    },
                    {
                        medida: "Grande",
                        precio: 50
                    }
                ]
            },
            {
                nombre: "Cafe Expresso",
                descripcion: "Carga de Café Expresso",
                precio: 30
            },
            {
                nombre: "Prensa Francesa",
                descripcion: "Café hecho con prensa francesa",
                precio: 50
            },
            {
                nombre: "Té",
                descripcion: "Té natural de diferentes sabores",
                precio: 54
            },
            {
                nombre: "Tisana",
                descripcion: "Infusión de frutos con agua caliente",
                precio: 70
            },
            {
                nombre: "Cafe Capuccino",
                descripcion: "Café clasico con leche con espuma",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 46
                    },
                    {
                        medida: "Grande",
                        precio: 56
                    }
                ]
            },
            {
                nombre: "Cafe Latte",
                descripcion: "Café clasico con leche sin espuma ",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 46
                    },
                    {
                        medida: "Grande",
                        precio: 56
                    }
                ]
            },
            {
                nombre: "Cafe Flat White",
                descripcion: "Café clasico con chocolate blanco",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 46
                    },
                    {
                        medida: "Grande",
                        precio: 56
                    }
                ]
            },
            {
                nombre: "Cafe Mocca",
                descripcion: "Café clasico Mocca con chocolate negro ",
                precio: 68
            },
            {
                nombre: "Cafe Mocca Blanco",
                descripcion: "Café Clasico Mocca con chocolate blanco",
                precio: 68
            },
            {
                nombre: "Cafe Mocca Caramel",
                descripcion: "Café clasico con chocolate negro y caramelo",
                precio: 68
            },
            {
                nombre: "Chai",
                descripcion: "Chai Latte",
                precio: 65
            },
            {
                nombre: "Chocolate",
                descripcion: "Bebida Caliente de chocolate",
                precio: 60
            }
        ]
    },
    {
        bebidas_frias: [
            {
                nombre: "Frapuccino",
                descripcion: "Café Frappe Clasico con café",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 60
                    },
                    {
                        medida: "Grande",
                        precio: 70
                    }
                ]
            },
            {
                nombre: "Frapuccino Oreo",
                descripcion: "Café Frappe Clasico con galleta oreo",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Mocaccino",
                descripcion: "Café Mocca Clasico",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Mocaccino Blanco",
                descripcion: "Café Frappe Mocca Clasico con chocolate blanco",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Capuccino Caramel",
                descripcion: "Café Frappe Mocca Clasico con caramelo",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Smoothie",
                descripcion: "Bebida frappé en agua de diferentes sabores",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 75
                    },
                    {
                        medida: "Grande",
                        precio: 85
                    }
                ]
            },
            {
                nombre: "Matcha Frappe",
                descripcion: "Bebida frappé sabor matcha",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Chocolate Frio",
                descripcion: "Bebida con Chocolate",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 65
                    },
                    {
                        medida: "Grande",
                        precio: 75
                    }
                ]
            },
            {
                nombre: "Chocolate Blanco Frappé",
                descripcion: "Bebida frappé con Chocolate Blanco",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 65
                    },
                    {
                        medida: "Grande",
                        precio: 75
                    }
                ]
            },
            {
                nombre: "Malteada",
                descripcion: "Bebida frappé con Nieve de Sabor",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 70
                    },
                    {
                        medida: "Grande",
                        precio: 80
                    }
                ]
            },
            {
                nombre: "Soda Italiana",
                descripcion: "Bebida con agua mineral refrescante de sabor",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 60
                    },
                    {
                        medida: "Grande",
                        precio: 70
                    }
                ]
            },
            {
                nombre: "Naranjada",
                descripcion: "Bebida con agua mineral refrescante de sabor Naranja",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 40
                    },
                    {
                        medida: "Grande",
                        precio: 50
                    }
                ]
            },
            {
                nombre: "Skimo",
                descripcion: "Bebida Frappé de Sabor",
                medidas: [
                    {
                        medida: "Mediano",
                        precio: 75
                    },
                    {
                        medida: "Grande",
                        precio: 85
                    }
                ]
            },
            {
                nombre: "Carajillo",
                descripcion: "Café expresso mezclado con licor",
                precio: 99
            }
        ]
    },
    {
        crepas_saladas:[
            {
                nombre: "Crepizza",
                descripcion: "Crepa con mezcla de quesos y peperoni",
                precio: 75
            },
            {
                nombre: "Crepa Hawaiana",
                descripcion: "Crepa con mezcla de quesos, jamón y piña",
                precio: 75
            },
            {
                nombre: "Crepa Margarette",
                descripcion: "Crepa con mezcla de quesos, jitomate y albahaca",
                precio: 75
            },
            {
                nombre: "Crepa Champs",
                descripcion: "Crepa con mezcla de quesos, champiñones y albahaca",
                precio: 80
            },
            {
                nombre: "Crepa Calle 7",
                descripcion: "Crepa con mezcla de quesos con picadillo almendrado",
                precio: 85
            }
        ]
    },
    {
        crepas_dulces:[
            {
                nombre: "Crepa Avellanata",
                descripcion: "Crepa con nutella, nuez y platano",
                precio: 65
            },
            {
                nombre: "Crepa Goover",
                descripcion: "Crepa con crema de cacahuate, mermelada y fruta",
                precio: 65
            },
            {
                nombre: "Crepa Marmelo",
                descripcion: "Crepa con queso crema, mermelada de sabor y fruta",
                precio: 65
            },
            {
                nombre: "Crepa Nevado",
                descripcion: "Crepa con composta de manzana, helado y fruta",
                precio: 85
            },
            {
                nombre: "Crepa Morena",
                descripcion: "Crepa de chocolate, queso crema, fresas, mermelada de jamaica y durazno",
                precio: 85
            }
        ]
    },
    {
        waffles:[
            {
                nombre: "Waffle Café",
                descripcion: "Waffle con platano, nuez y salsa de café",
                precio: 90
            },
            {
                nombre: "Waffle Frutos Rojos",
                descripcion: "Mix de fruta y mermelada de la casa de frutos rojos",
                precio: 90
            }
        ]
    },
    {
        ensaladas:[
            {
                nombre: "Ensalada Clasica",
                descripcion: "Ensalada con jitomate, champiñones, mix de hojas, aceite de oliva, aceituna negra, crotones y panela",
                precio: 80
            },
            {
                nombre: "Ensalada Selva Negra",
                descripcion: "Ensalada con Jamón selva negra, queso cabra, arándanos, vinagreta de mostaza y mix de hojas",
                precio: 80
            }
        ]
    },
    {
        pitas:[
            {
                nombre: "Pita Arabe",
                descripcion: "Tortilla árabe con queso, jamón, piña, champiñones y curry",
                precio: 89
            }
        ]
    },
    {
        chapatas:[
            {
                nombre: "Chapata Selva Negra",
                descripcion: "Chapata con jamón selva negra, jitomate, queso, mayonesa y papas",
                precio: 90
            },
            {
                nombre: "Chapata 4 Pimientos",
                descripcion: "Chapata con jamon, jocoque seco, queso, vinagreta de mostaza y papas",
                precio: 90
            },
            {
                nombre: "Chapata Atun",
                descripcion: "Chapata con atún, rábanos, naranja, aceituna negra, cebolla, mayonesa y papas",
                precio: 95
            }
        ]
    }
]