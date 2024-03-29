def calcular_temperatura_altura(altura_km):
    # Temperatura inicial al nivel del suelo
    temperatura = 30

    # Por cada 10 km de altura, la temperatura baja 10 grados
    temperatura -= (altura_km // 10) * 10

    return temperatura

def main():
    altura_km = float(input("Ingrese la altura en kilómetros: "))
    temperatura = calcular_temperatura_altura(altura_km)
    print("La temperatura a una altura de {} kilómetros es: {} grados Celsius".format(altura_km, temperatura))

if __name__ == "__main__":
    main()
