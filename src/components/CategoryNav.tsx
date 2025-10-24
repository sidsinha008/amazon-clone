const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Books",
  "Beauty",
  "Toys & Games",
  "Automotive",
];

const CategoryNav = () => {
  return (
    <nav className="bg-[hsl(var(--header-light))] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-8 py-3 overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <button className="text-sm whitespace-nowrap hover:text-primary transition-colors font-medium">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
