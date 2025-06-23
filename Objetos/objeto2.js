const SalaInformatica = {
    Tamanho: "Grande",
    Ventilada: "Sim",
    NumeroComputadores: 12,
    desktops: {
    Monitor: "Grande",
    Mouse: "Cabeado",
    GabineteCor: "Preto",
    Click: function(){
        console.log("Click realizado.")
    },
    Aplicativos: ["Chrome", "Edge", "Copilot", "VS Code", "Minecraft"]
}
}

console.log("É Ventilada? ",SalaInformatica.Ventilada)
console.log("Quantos computadores? ",SalaInformatica.NumeroComputadores)
console.log("Quais aplicativos do desktop? ",SalaInformatica.desktops.Aplicativos)
console.log(SalaInformatica.desktops.Click)