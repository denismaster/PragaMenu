export interface Product {
    name: string;
    weight?: number | string;
    price?: number;
    additionalInformation?: string;
}

export interface ProductCategory {
    name: string;
    products: Product[]
}

export interface OrderUpdate {
    action: "add" | "remove"
    name: string;
    category?: string;
    price: number;
}

export const MENU: ProductCategory[] = [
    {
        name: "Первые блюда",
        products: [
            {
                name: "Куриный бульон",
                weight: 300,
                price: 100
            },
            {
                name: "Борщ",
                weight: "300/110",
                price: 150
            },
            {
                name: "Грибной крем-суп",
                weight: 300,
                price: 150
            },
            {
                name: "Окрошка на кефире",
                weight: 300,
                price: 120
            },
            {
                name: "Окрошка на квасе",
                weight: 300,
                price: 120
            },
            
        ]
    },
    {
        name: "Мясо и рыба",
        products: [
            {
                name: "Куриная котлета",
                weight: 100,
                price: 75
            },
            {
                name: `Котлета свино-говяжья с сыром "Моцарелла"`,
                weight: 100,
                price: 115
            },
            {
                name: "Котлета говяжья",
                weight: 100,
                price: 130
            },
            {
                name: "Лента рёбер",
                weight: 100,
                price: 56
            },
            {
                name: "Куриное филе на гриле",
                weight: 100,
                price: 80
            },
            {
                name: "Филе хека в пивном кляре",
                weight: 120,
                price: 120
            },
        ]
    },
    {
        name: "Фирменные колбаски",
        products: [
            {
                name: "Пикантные свино-говяжьи",
                weight: 100,
                price: 95
            },
            {
                name: "Куриные с беконом",
                weight: 100,
                price: 85
            },
            {
                name: "С бараниной",
                weight: 100,
                price: 95
            },
        ]
    },
    {
        name: "Салаты",
        products: [
            {
                name: "Салат с молодой капустой(сметана)",
                additionalInformation: "Заправляется сметаной",
                weight: 200,
                price: 105
            },
            {
                name: "Салат с молодой капустой(масло)",
                additionalInformation: "Заправляется растительным маслом",
                weight: 200,
                price: 105
            },
            {
                name: "Овощной салат(сметана)",
                additionalInformation: "Заправляется сметаной",
                weight: 200,
                price: 105
            },
            {
                name: "Овощной салат(масло)",
                additionalInformation: "Заправляется растительным маслом",
                weight: 200,
                price: 105
            },
            {
                name: "Салат с кижучем собственного копчения(тар-тар)",
                additionalInformation: "Заправка с соусом тар-тар или цитрусовая",
                weight: 150,
                price: 160
            },
            {
                name: "Салат с кижучем собственного копчения(цитрус)",
                additionalInformation: "Заправка с цитрусом",
                weight: 150,
                price: 160
            },
            {
                name: "Салат с куриным филе на гриле",
                additionalInformation: "Медово-горчичная заправка",
                weight: 150,
                price: 140
            },
        ]
    },
    {
        name: "Гарниры",
        products: [
            {
                name: "Картофель фри",
                weight: 120,
                price: 60
            },
            {
                name: "Картофель по-домашнему",
                weight: 150,
                price: 40
            },
            {
                name: "Тальятелле",
                weight: 150,
                price: 65
            },
            {
                name: "Спагетти",
                weight: 150,
                price: 50
            },
            {
                name: "Тушёная капуста",
                weight: 150,
                price: 65
            },
            {
                name: "Картофельные оладьи со сливочно-грибным соусом",
                weight: 180,
                price: 110
            },
            {
                name: "Картофельные драники с луком и грибами",
                weight: 180,
                price: 110
            },
            {
                name: "Овощная котлета",
                weight: 110,
                price: 110
            },
        ]
    },
    {
        name: "Овощи",
        products: [
            {
                name: "Микс салата",
                weight: 40,
                price: 45
            },
            {
                name: "Помидор",
                weight: 50,
                price: 30
            },
            {
                name: "Огурец",
                weight: 50,
                price: 30
            },
            {
                name: "Помидоры гриль",
                weight: 50,
                price: 30
            },
            {
                name: "Кабачки гриль",
                weight: 50,
                price: 35
            },
            {
                name: "Баклажан гриль",
                weight: 50,
                price: 50
            },
            {
                name: "Болгарский перец гриль",
                weight: 50,
                price: 40
            },
            {
                name: "Шампиньоны гриль",
                weight: 50,
                price: 40
            },
        ]
    },
    {
        name: "Дополнительно",
        products: [
            {
                name: "Яичница из 3-х яиц",
                weight: 120,
                price: 60
            },
            {
                name: "Омлет из 3-х яиц",
                weight: 120,
                price: 60
            },
            {
                name: "Блинчики с курицей и грибами",
                weight: 130,
                price: 80
            },
            {
                name: "Блинчики с творогом",
                weight: 130,
                price: 80
            },
            {
                name: "Бельгийская вафля с шариком мороженного и ягодами",
                weight: 130,
                price: 145
            },
        ]
    },
    {
        name: "Соусы на выбор",
        products: [
            {
                name: `"Тар-Тар"`,
            },
            {
                name: "Кетчуп",
            },
            {
                name: "Горчица",
            },
            {
                name: `"Барбекю"`,
            },
            {
                name: `"Чесночный"`,
            },
            {
                name: `Сметана`,
            },
        ]
    },
    {
        name: "Добавки",
        products: [
            {
                name: `Бекон`,
                weight: 50,
                price: 60
            },
            {
                name: `Сыр Адыгейский`,
                weight: 50,
                price: 40
            },
            {
                name: `Сыр Грана Падано`,
                weight: 10,
                price: 30
            },
            {
                name: `Соус сливочно-грибной`,
                weight: 70,
                price: 70
            },
            {
                name: `Соус карбонара`,
                weight: 70,
                price: 70
            },
        ]
    },
    {
        name: "Напитки",
        products: [
            {
                name: `Чай зелёный`,
                additionalInformation: "С мёдом и лимоном"
            },
            {
                name: `Чай черный`,
                additionalInformation: "С мёдом и лимоном"
            },
            {
                name: "Кофе \"Американо\"",
            },
            {
                name: "Сок яблочный",
            },
            {
                name: "Сок ананосовый",
            },
            {
                name: "Сок мультифруктовый",
            },
            {
                name: "Сок апельсиновый",
            },
            {
                name: "Сок вишневый",
            },
        ]
    },
]