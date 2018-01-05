package com.wx.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wx.mapper.CategoryMapper;
import com.wx.pojo.Category;
import com.wx.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryMapper categoryMapper;

    public List<Category> list() {
	return categoryMapper.list();
    }

    public void add(Category category) {
	categoryMapper.add(category);
    }

    public void delete(Category category) {
	categoryMapper.delete(category);
    }

    public List<Category> get(Category category) {
	return categoryMapper.get(category);
    }

    public int update(Category category) {
	return categoryMapper.update(category);
    }

    public int check(String id) {
	return categoryMapper.check(id);
    }
}
