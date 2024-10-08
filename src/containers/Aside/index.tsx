import { CategoryButton, CategoryList, CategorySection } from "./styles"
import { useState } from "react"

const Categories = () => {
  /* Aqui eu passo o estado inicial da lista de categorias */
  const [categoryList, setCategoryList] = useState<string[]>([
    "Favorites",
    "Groceries",
    "Work",
    "Study",
    "Sports"
  ])

  /* Aqui eu adiciono uma nova categoria */
  const addNewCategory = () => {
    setCategoryList([...categoryList, "New category"])
  }

  return (
    <CategorySection>
      <h3>All Tasks</h3>
      <CategoryList>
        {/* Aqui eu consigo percorrer a lista de categorias e adicionar cada uma delas */}
        {categoryList.map((category: string) => (
          <li key={category}>{category}</li>
        ))}
      </CategoryList>
      <CategoryButton onClick={addNewCategory}>+ New category</CategoryButton>
    </CategorySection>
  )
}

export default Categories
