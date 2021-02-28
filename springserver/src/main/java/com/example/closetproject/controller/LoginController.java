package com.example.closetproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {

    @PostMapping("/api/login")
    @ResponseBody
    public String checkFunc() {
        return "Hello";
    }
}
