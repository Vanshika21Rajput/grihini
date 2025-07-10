package com.example.Gruhani.Configuration;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class securityconfig {

    @Bean
    public SecurityFilterChain secure(HttpSecurity hs) throws Exception {
        return hs.csrf(o->o.disable())
                .formLogin(o->o.loginPage("/logins").defaultSuccessUrl("/home",true).loginProcessingUrl("/login"))

                .authorizeHttpRequests(o->o.requestMatchers("/logins","/register","/home").permitAll().anyRequest().authenticated())
                .build();
    }
}
