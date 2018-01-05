package com.wx.service;

import java.util.List;

import com.wx.pojo.Category;

public interface CategoryService {

    List<Category> list();

    void add(Category category);

    void delete(Category category);

    List<Category> get(Category category);
    
    int update(Category category);
    
    int check(String id);
}
