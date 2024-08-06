package com.fablemindz.storytelling.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fablemindz.storytelling.model.Podcasts;
import java.util.List;


public interface PodcastsRepo extends JpaRepository<Podcasts, Long> {
     List<Podcasts> findByPodcastId(long podcastId);
}

