# Instrukcja przygotowania środowiska na warsztat

Aby przygotować się do udziału w warsztacie, proszę postępować zgodnie z poniższymi krokami:

---

## 1. Konto AWS
- Załóż aktywne konto AWS, jeśli jeszcze go nie posiadasz:
  1. Przejdź na [stronę rejestracji AWS](https://aws.amazon.com/free/).
  2. Postępuj zgodnie z instrukcjami rejestracji, podając swoje dane i metodę płatności (nie poniesiesz żadnych kosztów, będziemy korzystać z darmowego poziomu Free Tier).
  3. Po rejestracji zaloguj się do AWS Management Console.

---

## 2. Dostęp do repozytorium kodu
- **GitHub**:
  1. Załóż konto na [GitHubie](https://github.com/), jeśli go nie masz.
  2. Sprawdź, czy masz zainstalowanego **Git** na swoim komputerze. W terminalu wpisz:
     ```bash
     git --version
     ```
     Jeśli polecenie zwróci wersję, Git jest zainstalowany. W przeciwnym razie pobierz i zainstaluj Git z [oficjalnej strony](https://git-scm.com/).

---

## 3. Edytor kodu
- Zainstaluj dowolny edytor kodu. Polecam **Visual Studio Code**:
  1. Pobierz edytor z [oficjalnej strony](https://code.visualstudio.com/).
  2. Zainstaluj i opcjonalnie dodaj rozszerzenia do obsługi YAML i JSON (przydatne dla plików konfiguracyjnych).

---

## 4. Narzędzia AWS CLI
- **AWS CLI**:
  1. Pobierz i zainstaluj AWS Command Line Interface (CLI) z [oficjalnej strony](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
  2. Po instalacji skonfiguruj CLI, wpisując w terminalu:
     ```bash
     aws configure
     ```
     Wprowadź swoje dane dostępowe AWS, region domyślny (np. `us-east-1`) i format danych (domyślnie `json`).
     
---

## 5. Środowisko lokalne
- Na potrzeby szkolenia używać będziemy środowiska Node.js. [Instrukcja instalacji środowiska](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

---

## 6. Dodatkowe zasoby (opcjonalne)
- Zapoznaj się z podstawowymi pojęciami AWS i CI/CD:
  - Dokumentacja AWS CodePipeline: [Link](https://docs.aws.amazon.com/codepipeline/).
  - Podstawy GitHub: [Link](https://docs.github.com/).

---

Po przygotowaniu środowiska prosimy o sprawdzenie dostępu do kont AWS i GitHub oraz upewnienie się, że wszystkie narzędzia są poprawnie zainstalowane.
