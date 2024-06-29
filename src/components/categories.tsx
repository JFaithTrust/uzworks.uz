"use client"

import {useEffect, useState} from "react";
import {getJobCategories} from "@/store/api";
import {JobCategory} from "@/types";
import CategoryCard from "@/components/category-card";

const Categories = () => {
  const [categories, setCategories] = useState<JobCategory[]>([])

  useEffect(() => {
    getJobCategories().then((c) => setCategories(c))
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">{`Biz bilan ${categories.length} tadan ortiq`}
          <span
            className="text-darkblue"> ish turlari</span> bo&apos;yicha ish oling</h1>
        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-3">
          {categories.slice(0, 12).map((category) => (
            <CategoryCard key={category.id} category={category}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories