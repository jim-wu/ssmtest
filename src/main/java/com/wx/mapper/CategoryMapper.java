package com.wx.mapper;

import java.util.List;

import com.wx.pojo.Category;

public interface CategoryMapper {

    public int add(Category category);

    public void delete(Category category);

    public List<Category> get(Category category);

    public int update(Category category);

    public List<Category> list();

    public int count();
    
    public int check(String id);

}
