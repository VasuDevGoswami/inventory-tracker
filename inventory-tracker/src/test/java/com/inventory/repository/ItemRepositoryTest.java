package com.inventory.repository;

import com.inventory.entity.Item;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * @author Vasu Dev
 */
@SpringBootTest
class ItemRepositoryTest {
    @Autowired
    ItemRepository itemRepository;

    @Test
    public void shouldGetAllItems() {
        assertTrue(this.itemRepository.count()>0);
    }

    @Test
    public void shouldGetAnItem() {
        Integer id = 1;
        assertTrue(this.itemRepository.findById(id).isPresent());
    }

    @Test
    public void shouldAddAnItem() {
        Item item = new Item();
        item.setDescription("desc");
        item.setImageUrl("test");
        item.setName("Name");
        item.setPrice((float) 123.4);
        assertTrue(this.itemRepository.save(item).getId()>0);
    }
}
