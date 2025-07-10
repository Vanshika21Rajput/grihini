// Real product data based on the provided images
export interface Product {
  id: number;
  name: string;
  seller: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  deliveryTime: string;
  image: string;
  badge: string;
  verified: boolean;
  category: string;
  subcategory: string;
  description: string;
  kitchenVideoUrl?: string;
}

export const realProducts: Product[] = [
  // Dolly Aunty's Products - Handmade Crafts & Natural Products
  {
    id: 1,
    name: "Handmade Godhan Deepak",
    seller: "Dolly Aunty",
    price: "₹150",
    originalPrice: "₹200",
    discount: "25% OFF",
    rating: 4.9,
    deliveryTime: "2 DAYS",
    image: "/dolly aunty/godhan deepak.jpeg",
    badge: "Handcrafted",
    verified: true,
    category: "Handmade Crafts",
    subcategory: "Festival Diyas",
    description: "Beautiful handmade godhan deepak perfect for festivals and religious ceremonies. Made with eco-friendly materials."
  },
  {
    id: 2,
    name: "Decorated Godhan Deepak",
    seller: "Dolly Aunty",
    price: "₹180",
    originalPrice: "₹240",
    discount: "25% OFF",
    rating: 4.8,
    deliveryTime: "2 DAYS",
    image: "/dolly aunty/godhan decorated deepak.jpeg",
    badge: "Premium",
    verified: true,
    category: "Handmade Crafts",
    subcategory: "Festival Diyas",
    description: "Intricately decorated godhan deepak with traditional motifs. Perfect for special occasions and gifting."
  },
  {
    id: 3,
    name: "Natural Herbal Soap",
    seller: "Dolly Aunty",
    price: "₹80",
    originalPrice: "₹100",
    discount: "20% OFF",
    rating: 4.9,
    deliveryTime: "1 DAY",
    image: "/dolly aunty/herbal soap.jpeg",
    badge: "Chemical Free",
    verified: true,
    category: "Natural Cosmetics",
    subcategory: "Herbal Soaps",
    description: "100% natural herbal soap made with traditional ingredients. Gentle on skin and free from harmful chemicals."
  },
  {
    id: 4,
    name: "Vaidik Rakhi Set",
    seller: "Dolly Aunty",
    price: "₹120",
    originalPrice: "₹150",
    discount: "20% OFF",
    rating: 4.7,
    deliveryTime: "3 DAYS",
    image: "/dolly aunty/vaidik rakhi.jpeg",
    badge: "Traditional",
    verified: true,
    category: "Handmade Crafts",
    subcategory: "Festival Items",
    description: "Traditional vaidik rakhi made with authentic materials. Perfect for Raksha Bandhan celebrations."
  },
  {
    id: 5,
    name: "Godhan Toran",
    seller: "Dolly Aunty",
    price: "₹200",
    originalPrice: "₹250",
    discount: "20% OFF",
    rating: 4.8,
    deliveryTime: "2 DAYS",
    image: "/dolly aunty/godhan toran.jpeg",
    badge: "Decorative",
    verified: true,
    category: "Handmade Crafts",
    subcategory: "Home Decor",
    description: "Beautiful godhan toran for door decoration. Handcrafted with traditional techniques and natural materials."
  },

  // Sakshi Tolani's Products - Cakes & Desserts
  {
    id: 6,
    name: "Vanilla-Chocolate Cake with Walnuts",
    seller: "Sakshi Tolani",
    price: "₹450",
    originalPrice: "₹550",
    discount: "18% OFF",
    rating: 4.9,
    deliveryTime: "4 HOURS",
    image: "/Sakshi Tolani/Sakshi Tolani/Vanilla-Chocolate Cake with Walnuts.jpeg",
    badge: "Fresh Baked",
    verified: true,
    category: "Homemade Food",
    subcategory: "Cakes & Desserts",
    description: "Delicious vanilla-chocolate cake topped with fresh walnuts. Perfect for birthdays and celebrations."
  },
  {
    id: 7,
    name: "Suji Cake",
    seller: "Sakshi Tolani",
    price: "₹300",
    originalPrice: "₹380",
    discount: "21% OFF",
    rating: 4.8,
    deliveryTime: "3 HOURS",
    image: "/Sakshi Tolani/Sakshi Tolani/Suji Cake.jpeg",
    badge: "Healthy",
    verified: true,
    category: "Homemade Food",
    subcategory: "Cakes & Desserts",
    description: "Healthy suji (semolina) cake made with natural ingredients. Light, fluffy and perfect for tea time."
  },
  {
    id: 8,
    name: "Mawa Slice Cakes Gift Box",
    seller: "Sakshi Tolani",
    price: "₹400",
    originalPrice: "₹500",
    discount: "20% OFF",
    rating: 4.9,
    deliveryTime: "4 HOURS",
    image: "/Sakshi Tolani/Sakshi Tolani/Mawa Slice Cakes as Gifts.jpeg",
    badge: "Gift Ready",
    verified: true,
    category: "Homemade Food",
    subcategory: "Cakes & Desserts",
    description: "Premium mawa slice cakes beautifully packaged as gifts. Rich, creamy and made with pure mawa."
  },

  // Neelam Joshi's Products - Traditional Meals & Vrat Food
  {
    id: 9,
    name: "Dal Bati Churma",
    seller: "Neelam Joshi",
    price: "₹180",
    originalPrice: "₹220",
    discount: "18% OFF",
    rating: 4.9,
    deliveryTime: "45 MINS",
    image: "/Neelam Joshi/Daal Bhati Churma.jpeg",
    badge: "Authentic",
    verified: true,
    category: "Homemade Food",
    subcategory: "Traditional Meals",
    description: "Authentic Rajasthani Dal Bati Churma made with traditional recipes. Complete meal with dal, bati and sweet churma."
  },
  {
    id: 10,
    name: "Sabudana Khichdi",
    seller: "Neelam Joshi",
    price: "₹120",
    originalPrice: "₹150",
    discount: "20% OFF",
    rating: 4.8,
    deliveryTime: "30 MINS",
    image: "/Neelam Joshi/Sabudana Khichdi.jpeg",
    badge: "Vrat Special",
    verified: true,
    category: "Homemade Food",
    subcategory: "Vrat Food",
    description: "Perfect sabudana khichdi for fasting days. Made with fresh ingredients and traditional spices."
  },
  {
    id: 11,
    name: "Vrat Thali Special",
    seller: "Neelam Joshi",
    price: "₹200",
    originalPrice: "₹250",
    discount: "20% OFF",
    rating: 4.9,
    deliveryTime: "45 MINS",
    image: "/Neelam Joshi/Vrat Thali(Sabudana khichdi,dahi,falhari chikki).jpeg",
    badge: "Complete Meal",
    verified: true,
    category: "Homemade Food",
    subcategory: "Vrat Food",
    description: "Complete vrat thali with sabudana khichdi, dahi, and falhari chikki. Perfect for fasting days."
  },
  {
    id: 12,
    name: "Fresh Gujiya",
    seller: "Neelam Joshi",
    price: "₹160",
    originalPrice: "₹200",
    discount: "20% OFF",
    rating: 4.8,
    deliveryTime: "2 HOURS",
    image: "/Neelam Joshi/Gujia.jpeg",
    badge: "Festival Special",
    verified: true,
    category: "Homemade Food",
    subcategory: "Festival Sweets",
    description: "Traditional gujiya filled with khoya and dry fruits. Perfect for Holi and other festivals."
  },
  {
    id: 13,
    name: "Sabudana Tikki",
    seller: "Neelam Joshi",
    price: "₹100",
    originalPrice: "₹130",
    discount: "23% OFF",
    rating: 4.7,
    deliveryTime: "30 MINS",
    image: "/Neelam Joshi/Sabudana Tikki.jpeg",
    badge: "Crispy",
    verified: true,
    category: "Homemade Food",
    subcategory: "Vrat Food",
    description: "Crispy sabudana tikki perfect for fasting. Made with fresh ingredients and served hot."
  },

  // Manju Vijayvargiye's Products - Snacks & Sweets
  {
    id: 14,
    name: "Besan Ladoo",
    seller: "Manju Vijayvargiye",
    price: "₹200",
    originalPrice: "₹250",
    discount: "20% OFF",
    rating: 4.9,
    deliveryTime: "2 HOURS",
    image: "/Manju vijayvargiye/Besan Ladoo.jpeg",
    badge: "Traditional",
    verified: true,
    category: "Homemade Food",
    subcategory: "Traditional Sweets",
    description: "Rich and delicious besan ladoo made with pure ghee and roasted gram flour. Traditional family recipe."
  },
  {
    id: 15,
    name: "Atte ke Laddu",
    seller: "Manju Vijayvargiye",
    price: "₹180",
    originalPrice: "₹220",
    discount: "18% OFF",
    rating: 4.8,
    deliveryTime: "2 HOURS",
    image: "/Manju vijayvargiye/Atte ke Laddu.jpeg",
    badge: "Healthy",
    verified: true,
    category: "Homemade Food",
    subcategory: "Traditional Sweets",
    description: "Nutritious atte ke laddu made with whole wheat flour, ghee and jaggery. Healthy and delicious."
  },
  {
    id: 16,
    name: "Mixed Namkeen Chiwda",
    seller: "Manju Vijayvargiye",
    price: "₹120",
    originalPrice: "₹150",
    discount: "20% OFF",
    rating: 4.7,
    deliveryTime: "1 HOUR",
    image: "/Manju vijayvargiye/Chiwda.jpeg",
    badge: "Crunchy",
    verified: true,
    category: "Homemade Food",
    subcategory: "Namkeen & Snacks",
    description: "Crispy and flavorful chiwda mix with peanuts, sev and spices. Perfect tea-time snack."
  },
  {
    id: 17,
    name: "Fresh Dhokla",
    seller: "Manju Vijayvargiye",
    price: "₹100",
    originalPrice: "₹130",
    discount: "23% OFF",
    rating: 4.8,
    deliveryTime: "45 MINS",
    image: "/Manju vijayvargiye/Dhokla.jpeg",
    badge: "Steamed",
    verified: true,
    category: "Homemade Food",
    subcategory: "Gujarati Snacks",
    description: "Soft and spongy dhokla made with fresh batter. Served with green chutney and garnished with mustard seeds."
  },
  {
    id: 18,
    name: "Gulab Jamun",
    seller: "Manju Vijayvargiye",
    price: "₹160",
    originalPrice: "₹200",
    discount: "20% OFF",
    rating: 4.9,
    deliveryTime: "2 HOURS",
    image: "/Manju vijayvargiye/Gulab Jamun.jpeg",
    badge: "Festive Favorite",
    verified: true,
    category: "Homemade Food",
    subcategory: "Traditional Sweets",
    description: "Soft and juicy gulab jamun soaked in aromatic sugar syrup. Perfect for celebrations and festivals."
  },
  {
    id: 19,
    name: "Crispy Khasta",
    seller: "Manju Vijayvargiye",
    price: "₹140",
    originalPrice: "₹170",
    discount: "18% OFF",
    rating: 4.7,
    deliveryTime: "1 HOUR",
    image: "/Manju vijayvargiye/Khasta.jpeg",
    badge: "Crispy",
    verified: true,
    category: "Homemade Food",
    subcategory: "Namkeen & Snacks",
    description: "Crispy and flaky khasta made with refined flour and spices. Perfect evening snack with tea."
  },
  {
    id: 20,
    name: "Til Ladoo",
    seller: "Manju Vijayvargiye",
    price: "₹150",
    originalPrice: "₹190",
    discount: "21% OFF",
    rating: 4.8,
    deliveryTime: "2 HOURS",
    image: "/Manju vijayvargiye/Til Ladoo.jpeg",
    badge: "Winter Special",
    verified: true,
    category: "Homemade Food",
    subcategory: "Traditional Sweets",
    description: "Nutritious til ladoo made with sesame seeds and jaggery. Perfect winter treat packed with energy."
  }
];

// Categories and subcategories
export const categories = [
  {
    name: "All",
    icon: "🏠",
    subcategories: []
  },
  {
    name: "Homemade Food",
    icon: "🍛",
    subcategories: [
      "Traditional Meals",
      "Cakes & Desserts", 
      "Traditional Sweets",
      "Namkeen & Snacks",
      "Gujarati Snacks",
      "Vrat Food",
      "Festival Sweets"
    ]
  },
  {
    name: "Natural Cosmetics",
    icon: "🧴",
    subcategories: [
      "Herbal Soaps",
      "Natural Skincare",
      "Hair Care Products"
    ]
  },
  {
    name: "Handmade Crafts",
    icon: "🎨",
    subcategories: [
      "Festival Diyas",
      "Festival Items",
      "Home Decor",
      "Traditional Crafts"
    ]
  }
];