package com.example.Gruhani.Configuration;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class securityconfig {

    @Bean
    public SecurityFilterChain secure(HttpSecurity hs) throws Exception {
        return hs.csrf(o->o.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .formLogin(o->o.loginPage("/logins").defaultSuccessUrl("/home",true).loginProcessingUrl("/login"))
                .logout(logout -> logout
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/logins")
                    .invalidateHttpSession(true)
                    .deleteCookies("JSESSIONID"))
                .authorizeHttpRequests(o->o
                    .requestMatchers("/logins","/register","/home","/api/**").permitAll()
                    .anyRequest().authenticated())
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:*", "http://127.0.0.1:*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
