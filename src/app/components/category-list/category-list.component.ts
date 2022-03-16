import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {FormAction} from "../../models/form-action";
import {ActionChanges} from "../../models/action-changes";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category | undefined = undefined;
  formActions = FormAction;
  currentFormAction: FormAction = FormAction.None;
  currentFormActionChanges: ActionChanges = {} as ActionChanges;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  viewCategory(category: Category) {
    this.currentFormAction = FormAction.VIEW;
    this.selectedCategory = category;
    this.currentFormActionChanges = new ActionChanges(this.currentFormAction, this.selectedCategory);
  }

  addCategory() {
    this.currentFormAction = FormAction.CREATE;
    this.currentFormActionChanges = new ActionChanges(this.currentFormAction, {} as Category);
  }

  updateCategory(category: Category) {
    this.currentFormAction = FormAction.UPDATE;
    this.selectedCategory = category;
    this.currentFormActionChanges = new ActionChanges(this.currentFormAction, this.selectedCategory);
  }

  deleteCategory(category: Category) {
    this.currentFormAction = FormAction.DELETE;
    this.selectedCategory = category;
    this.currentFormActionChanges = new ActionChanges(this.currentFormAction, this.selectedCategory);
  }

  emitedCategory($event: any) {
    if ($event) {
      this.getCategories();
    }
  }

  private getCategories() {
    this.categoryService.getCategoryList().subscribe({
      next: (categories: Category[]) => {
        this.categories = categories;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
