package com.ar.enbaldeapp.services;

import static com.ar.enbaldeapp.support.Constants.ACCESS_STRING;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_DESCRIPTION;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_ID;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_IMAGE;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_NAME;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_PRICE;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_QUANTITY;
import static com.ar.enbaldeapp.support.Constants.PRODUCT_TYPE_ID;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;

import androidx.annotation.NonNull;

import com.ar.enbaldeapp.models.Product;

import org.junit.Test;
import org.junit.experimental.theories.DataPoints;
import org.junit.experimental.theories.FromDataPoints;
import org.junit.experimental.theories.Theory;

public class CartApiServicesMust {
    @DataPoints("invalid strings")
    public static String[] invalidStrings() {
        return new String[]{"", null, "   "};
    }

    @Theory
    public void throwException_whenAccessStringIsInvalid(@FromDataPoints("invalid strings") String invalidToken) {
        Product product = createProduct();
        ApiServices sut = new ApiServices();
        Exception exception = assertThrows(RuntimeException.class, () -> sut.addToCart(invalidToken, product, s -> {}, e -> {}));
        assertEquals("El access token es inválido", exception.getMessage());
    }

    @NonNull
    private static Product createProduct() {
        return new Product(PRODUCT_ID, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_PRICE, PRODUCT_QUANTITY, PRODUCT_IMAGE, PRODUCT_TYPE_ID);
    }

    @Test
    public void throwException_whenSuccessCallbackIsInvalid() {
        Product product = createProduct();
        ApiServices sut = new ApiServices();
        Exception exception = assertThrows(RuntimeException.class, () -> sut.addToCart(ACCESS_STRING, product, null, e -> {}));
        assertEquals("El callback por éxito es inválido", exception.getMessage());
    }

    @Test
    public void throwException_whenFailureCallbackIsInvalid() {
        Product product = createProduct();
        ApiServices sut = new ApiServices();
        Exception exception = assertThrows(RuntimeException.class, () -> sut.addToCart(ACCESS_STRING, product, u -> {}, null));
        assertEquals("El callback por fallo es inválido", exception.getMessage());
    }
}
