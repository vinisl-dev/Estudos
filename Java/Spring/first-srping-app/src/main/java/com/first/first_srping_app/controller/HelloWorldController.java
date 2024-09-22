package com.first.first_srping_app.controller;

import com.first.first_srping_app.domain.User;
import com.first.first_srping_app.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello-world")
public class HelloWorldController {

    private HelloWorldService helloWorldService;

    public HelloWorldController(HelloWorldService helloWorldService) {
    this.helloWorldService = helloWorldService;
    }


    @GetMapping
    public String helloWorld() {
        return helloWorldService.helloWorld("Vinicios");
    }

    @PostMapping("/{id}")
    public String helloWorldPost(@RequestParam(value = "option", defaultValue = "none") String option, @PathVariable("id") String id, @RequestBody User body) {
        return "Hello World "+ body.getName() + id + option;
    }
}

