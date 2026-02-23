# Pokedex
Pokémon Pokédex

---

# Mini-especificación del filtro de Pokémon

El sistema incluye un campo de texto llamado Filtrar que permite buscar Pokémon por su nombre en inglés. El filtro funciona en tiempo real mientras el usuario escribe, mostrando únicamente los Pokémon que coinciden con el texto ingresado.

Casos de prueba del filtro

1. Mayúsculas y minúsculas
- Entrada: Pika, pika o PIKA.
- Resultado esperado: Se muestran los mismos Pokémon, por ejemplo Pikachu.

2. Espacios al inicio o final (trim)
- Entrada: espacios antes o después del nombre, como " pika" o "pika ".
- Resultado esperado: Se muestran los Pokémon correctamente sin que los espacios afecten la búsqueda.

3. Cadena vacía
- Entrada: el campo de búsqueda vacío.
- Resultado esperado: Se muestran todos los Pokémon disponibles.

4. Búsqueda parcial
- Entrada: char.
- Resultado esperado: Se muestran los Pokémon cuyos nombres contienen ese texto, como Charmander, Charmeleon y Charizard.

5. Sin coincidencias
- Entrada: zzzzz.
- Resultado esperado: Se muestra el mensaje Sin resultados.

6. Coincidencia exacta
- Entrada: pikachu.
- Resultado esperado: Se muestra únicamente el Pokémon Pikachu.

7. Texto con combinación de mayúsculas y minúsculas
- Entrada: PiKaChU.
- Resultado esperado: Se muestra Pikachu correctamente.

8. Solo espacios en el input
- Entrada: el usuario escribe únicamente espacios en blanco.
- Resultado esperado: Se muestran todos los Pokémon.

