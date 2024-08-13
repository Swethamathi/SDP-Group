// package com.littleinn.storytelling.controller;

// import com.littleinn.storytelling.model.Feedback;
// import com.littleinn.storytelling.service.FeedbackService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/feedback")
// public class FeedbackController {

//     @Autowired
//     private FeedbackService feedbackService;

//     @PostMapping
//     public Feedback submitFeedback(@RequestBody Feedback feedback) {
//         return feedbackService.saveFeedback(feedback);
//     }
// }

package com.littleinn.storytelling.controller;

import com.littleinn.storytelling.model.Feedback;
import com.littleinn.storytelling.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // This endpoint will handle POST requests to /api/feedback
    @PostMapping("/submit")
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }
}
