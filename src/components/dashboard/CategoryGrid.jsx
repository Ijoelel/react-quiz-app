import { QUIZ_CATEGORIES } from "@/constants/quizCategories";
import CategoryCard from "./CategoryCard";

const CategoryGrid = ({ onSelect }) => {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Quiz Categories</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {QUIZ_CATEGORIES.map((cat) => (
                    <CategoryCard
                        key={cat.id}
                        category={cat}
                        onPlay={() => onSelect(cat)}
                    />
                ))}
            </div>
        </section>
    );
};
export default CategoryGrid;
