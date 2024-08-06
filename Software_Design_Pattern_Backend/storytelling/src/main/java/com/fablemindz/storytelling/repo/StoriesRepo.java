package com.fablemindz.storytelling.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fablemindz.storytelling.model.Stories;

public interface StoriesRepo extends JpaRepository<Stories, Long> {

}

