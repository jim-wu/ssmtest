package com.wx.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.wx.pojo.Category;
import com.wx.service.CategoryService;

@Controller
@RequestMapping("")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @RequestMapping("listCategory")
    public ModelAndView listCategory() {
	ModelAndView mav = new ModelAndView();
	List<Category> cs = categoryService.list();
	mav.addObject("cs", cs);
	mav.setViewName("listCategory");
	return mav;
    }

    @RequestMapping("addCategory")
    public ModelAndView addCategory(Category category) {
	ModelAndView mav = new ModelAndView();
	if (null != category && !"".equalsIgnoreCase(category.getId())) {
	    categoryService.add(category);
	}
	mav.setViewName("redirect:/listCategory");
	return mav;
    }

    @RequestMapping("deleteCategory")
    @ResponseBody
    public void deleteCategory(Category category) {
	categoryService.delete(category);
    }

    @RequestMapping(value = "getCategory")
    @ResponseBody
    public List<Category> getCategory(Category category) {
	List<Category> cs = categoryService.get(category);
	return cs;
    }

    @RequestMapping(value = "updateCategory")
    @ResponseBody
    public int updateCategory(Category category) {
	return categoryService.update(category);
    }

    @RequestMapping(value = "checkCategory")
    @ResponseBody
    public int checkCategory(String id) {
	return categoryService.check(id);
    }
}
