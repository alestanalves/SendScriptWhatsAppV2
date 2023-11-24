async function enviarScript(scriptText, repetitions) {
  const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
  const main = document.querySelector("#main");
  const textarea = main.querySelector(`div[contenteditable="true"]`);

  if (!textarea) throw new Error("Não há uma conversa aberta");

  for (let i = 0; i < repetitions; i++) {
      for (const line of lines) {
          textarea.focus();
          document.execCommand('insertText', false, line);
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          await new Promise(resolve => setTimeout(resolve, 100)); // Aguarda um pouco antes de clicar em enviar
      }

      setTimeout(() => {
          const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
          if (sendButton) {
              sendButton.click();
          }
      }, 100);

      if (i !== repetitions - 1) {
          await new Promise(resolve => setTimeout(resolve, 900000)); // Aguarda 15 minutos antes de enviar novamente, a conta é feita em milesimo de segundos
      }
  }

  return lines.length * repetitions;
}

enviarScript("Ta na hora de tomar agua novamente", 100) // Entre "Ta na hora de tomar agua novamente" para enviar outra coisa é so alterar a mensagem, depois o numero 100 é o valor de vezes que vai repetir o loop
  .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
  .catch(console.error);