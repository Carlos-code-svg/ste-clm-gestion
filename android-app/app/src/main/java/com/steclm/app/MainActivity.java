package com.steclm.app;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MainActivity extends AppCompatActivity {

    private ListView lvNews;
    private List<String> filteredNews;
    private SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sharedPreferences = getSharedPreferences("STECLM_PREFS", Context.MODE_PRIVATE);
        Set<String> interests = sharedPreferences.getStringSet("user_interests", new HashSet<>());

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if (getSupportActionBar() != null) {
            getSupportActionBar().setTitle("STE-CLM Noticias");
        }

        lvNews = findViewById(R.id.rv_news_list); // He cambiado RecyclerView por ListView para el ejemplo de prueba rápido
        loadMockNews(interests);
    }

    private void loadMockNews(Set<String> interests) {
        List<String> allNews = new ArrayList<>();
        allNews.add("[Primaria] Nuevas vacantes para el curso 2026.");
        allNews.add("[Secundaria] Actualización de la bolsa de trabajo.");
        allNews.add("[Traslados] Guía definitiva para el concurso.");
        allNews.add("[Formación] Curso de Java en Albacete.");
        allNews.add("[General] Asamblea STE-CLM Albacete.");

        filteredNews = new ArrayList<>();
        for (String news : allNews) {
            for (String interest : interests) {
                if (news.contains("[" + interest + "]")) {
                    filteredNews.add(news);
                }
            }
            if (news.contains("[General]")) filteredNews.add(news);
        }

        if (filteredNews.isEmpty()) {
            filteredNews.add("No hay noticias para tus intereses actuales. Pulsa 'General' para ver todo.");
        }

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, filteredNews);
        lvNews.setAdapter(adapter);

        // Simular notificación interna al entrar
        if (!interests.isEmpty()) {
            NotificationHelper.showNotification(this, "Aviso STE-CLM", 
                "Tienes nuevas noticias sobre " + interests.iterator().next(), 
                interests.iterator().next(), interests);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        menu.add(0, 1, 0, "Web de Gestión").setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER);
        menu.add(0, 2, 0, "Cambiar Intereses").setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == 1) {
            Intent intent = new Intent(this, WebViewActivity.class);
            startActivity(intent);
            return true;
        } else if (item.getItemId() == 2) {
            Intent intent = new Intent(this, OnboardingActivity.class);
            startActivity(intent);
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
}
