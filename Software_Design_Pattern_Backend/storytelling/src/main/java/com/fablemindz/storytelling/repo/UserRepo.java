package com.fablemindz.storytelling.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fablemindz.storytelling.model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);
    Users findByUid(Long uid);
}

