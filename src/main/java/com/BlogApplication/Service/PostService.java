package com.BlogApplication.Service;

import com.BlogApplication.Entity.Post;
import com.BlogApplication.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository repo;

    public List<Post> getAllPosts(){
       return repo.findAll();
    }

    public Post getSinglePost(long id){
        return repo.findById(id).orElse(null);
    }

    public Post createPost(Post post){
        return repo.save(post);
    }

    public void deletePost(Long id){
        repo.deleteById(id);
    }

    public Post updatePost(Post post,Long id){
        Post pre = repo.findById(id).orElse(null);
//        if id id null then create the same post for new id
        if(pre==null){return repo.save(post);}
        pre.setTitle(post.getTitle());
        pre.setAuthor(post.getAuthor());
        pre.setContent(post.getContent());
        return repo.save(pre);
    }
}
