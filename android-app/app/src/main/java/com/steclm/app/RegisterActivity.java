package com.steclm.app;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class RegisterActivity extends AppCompatActivity {

    private EditText etRegEmail, etRegPassword, etAffiliateCode;
    private RadioGroup rgUserType;
    private RadioButton rbAffiliate;
    private Button btnRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        etRegEmail = findViewById(R.id.et_reg_email);
        etRegPassword = findViewById(R.id.et_reg_password);
        etAffiliateCode = findViewById(R.id.et_affiliate_code);
        rgUserType = findViewById(R.id.rg_user_type);
        rbAffiliate = findViewById(R.id.rb_affiliate);
        btnRegister = findViewById(R.id.btn_register);

        rgUserType.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                if (checkedId == R.id.rb_affiliate) {
                    etAffiliateCode.setVisibility(View.VISIBLE);
                } else {
                    etAffiliateCode.setVisibility(View.GONE);
                }
            }
        });

        btnRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = etRegEmail.getText().toString();
                String password = etRegPassword.getText().toString();
                boolean isAffiliate = rbAffiliate.isChecked();

                if (email.isEmpty() || password.isEmpty()) {
                    Toast.makeText(RegisterActivity.this, "Por favor complete todos los campos", Toast.LENGTH_SHORT).show();
                    return;
                }

                if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                    Toast.makeText(RegisterActivity.this, "Por favor introduzca un correo electrónico válido", Toast.LENGTH_SHORT).show();
                    return;
                }

                if (isAffiliate) {
                    String code = etAffiliateCode.getText().toString();
                    if (code.isEmpty()) {
                        Toast.makeText(RegisterActivity.this, "Como afiliado, debe proporcionar un código", Toast.LENGTH_SHORT).show();
                        return;
                    }
                    // Simular validación de email y registro de afiliado
                    Toast.makeText(RegisterActivity.this, "Registro de AFILIADO exitoso. Se ha enviado un correo de validación.", Toast.LENGTH_LONG).show();
                } else {
                    // Simular registro libre
                    Toast.makeText(RegisterActivity.this, "Registro LIBRE exitoso.", Toast.LENGTH_SHORT).show();
                }

                Intent intent = new Intent(RegisterActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }
}
