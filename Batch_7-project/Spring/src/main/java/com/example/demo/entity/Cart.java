package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
	@Id
	@Column(name = "c_id")
	private int c_id;
	@Column(name = "name")
	private String name;
	@Column(name = "description")
	private String description;
	@Column(name = "price")
	private int price;
	@Column(name = "image_url")
	private String image_url;
	@Column(name = "id")
	private int id;
	@ManyToOne(targetEntity = User_details.class, fetch = FetchType.EAGER)
	@JoinColumn(name = "id", insertable = false, updatable = false)
	private User_details user_details;

	public Cart() 
	{
        
	}

	public Cart(int c_id, String name, String description, int price, String image_url, int id) {
		super();
		this.c_id = c_id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.image_url = image_url;
		this.id = id;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Cart [c_id=" + c_id + ", name=" + name + ", description=" + description + ", price=" + price
				+ ", image_url=" + image_url + ", id=" + id + "]";
	}

}
