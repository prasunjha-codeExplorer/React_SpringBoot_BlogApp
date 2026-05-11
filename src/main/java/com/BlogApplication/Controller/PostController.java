package com.BlogApplication.Controller;

import com.BlogApplication.Entity.Post;
import com.BlogApplication.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//Base url
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService service;

    @GetMapping()
    public List<Post> getAllPosts(){
        return service.getAllPosts();
    }

    @GetMapping("/{id}")
    public Post getsinglepost(@PathVariable Long id){
        return service.getSinglePost(id);
    }

    @PostMapping("/createPost")
    public Post createPost(@RequestBody Post post){
        return service.createPost(post);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePost(@PathVariable Long id){
        service.deletePost(id);
    }

    @PutMapping("/update/{id}")
    public Post updatePost(@RequestBody Post post,@PathVariable Long id){
        return service.updatePost(post,id);
    }

}
