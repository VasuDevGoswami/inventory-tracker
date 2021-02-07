package com.inventory.repository;

import com.inventory.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * @author Vasu Dev
 */
@CrossOrigin(origins = "*")
public interface ItemRepository extends JpaRepository<Item, Integer> {
}
