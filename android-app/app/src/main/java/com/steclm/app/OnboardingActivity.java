package com.steclm.app;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

import java.util.HashSet;
import java.util.Set;

public class OnboardingActivity extends AppCompatActivity {

    private CheckBox cbPrimary, cbSecondary, cbTransfer, cbTraining;
    private Button btnSave;
    private SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_onboarding);

        sharedPreferences = getSharedPreferences("STECLM_PREFS", Context.MODE_PRIVATE);

        cbPrimary = findViewById(R.id.cb_primary);
        cbSecondary = findViewById(R.id.cb_secondary);
        cbTransfer = findViewById(R.id.cb_transfer);
        cbTraining = findViewById(R.id.cb_training);
        btnSave = findViewById(R.id.btn_save);

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                saveInterests();
                Intent intent = new Intent(OnboardingActivity.this, LoginActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

    private void saveInterests() {
        Set<String> interests = new HashSet<>();
        if (cbPrimary.isChecked()) interests.add("Primaria");
        if (cbSecondary.isChecked()) interests.add("Secundaria");
        if (cbTransfer.isChecked()) interests.add("Traslados");
        if (cbTraining.isChecked()) interests.add("Formación");

        sharedPreferences.edit().putStringSet("user_interests", interests).apply();
        sharedPreferences.edit().putBoolean("onboarding_complete", true).apply();

        Toast.makeText(this, "Intereses guardados localmente para la versión de prueba", Toast.LENGTH_SHORT).show();
    }
}
