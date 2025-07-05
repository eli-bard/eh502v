import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
/* 
import {
 UserButton
 SignedIn,
 SignedOut,
 SignInButton,
 SignUpButton,
 } from "@clerk/nextjs";
  */

const PlataformaLandingPage = () => {
  return (
    <>
      <Head>
        <title>
          EliHelp | Plataforma para auxiliar médicos e estudantes de medicina
        </title>
        <meta
          name="description"
          content="Médico clínico geral especializando-se em pediatria, autor de ebooks sobre saúde infantil. Recursos para profissionais e pais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="@/favicon.ico" type="image/x-icon"></link>
      </Head>

      {/* Cabeçalho com autenticação */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="logo">
              <Image
                src="/imgs/elihelp-logo1.png"
                alt="Dr. Eliabe Roriz Logo"
                width={60}
                height={40}
              />
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium">EliHelp</p>
              <p>A ajuda que os médicos e estudantes de medicina precisam</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="flex space-x-2 md:space-x-4">
              <Link
                href="#plataforma"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Benefícios
              </Link>
              <Link
                href="#precos"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Planos
              </Link>
              <Link
                href="/materiais"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Materiais Gratuitos
              </Link>
            </nav>

            {/*
            <div className="flex items-center space-x-2">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <Link href="/plat">
                  <Button variant="outline" className="hidden md:block">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" size="sm">
                    Entrar
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">Cadastre-se</Button>
                </SignUpButton>
              </SignedOut>
            </div>
*/}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Medicina com <span className="text-blue-600">Ciência</span> e{" "}
              <span className="text-green-600">Cuidado</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Recursos para profissionais de saúde e materiais educativos sobre
              saúde infantil e medicina do estilo de vida
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/*
              <SignedIn>
                <Link href="/plat">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Acessar Plataforma
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Comece Agora
                  </Button>
                </SignUpButton>
              </SignedOut>
              */}
              <Link href="/eh/dashboard-r">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Acessar plataforma
                </Button>
              </Link>
              <Link href="/materiais">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Ver Materiais Gratuitos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section id="plataforma" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              <span className="border-b-4 border-blue-600 pb-2">
                Benefícios da Plataforma
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Para Profissionais de Saúde
                </h3>
                <p className="text-gray-700 mb-6">
                  Ferramentas e protocolos atualizados para auxiliar na prática
                  clínica.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fluxogramas diagnósticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Dosagens e posologias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Protocolos de atendimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Artigos comentados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Benefícios Exclusivos
                </h3>
                <p className="text-gray-700 mb-6">
                  Recursos para atualização e melhoria da prática clínica
                  diária.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Guias de conduta atualizados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Ferramentas de acompanhamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Atualizações constantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Suporte especializado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              {/*
              <SignedIn>
                <Link href="/plat">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Acessar Plataforma
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Experimente Grátis
                  </Button>
                </SignUpButton>
              </SignedOut>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Planos e Preços */}
      <section id="precos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              <span className="border-b-4 border-green-600 pb-2">
                Planos e Preços
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Plano Básico */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Básico
                </h3>
                <p className="text-gray-600 mb-4">
                  Para estudantes de medicina
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    R$00,00
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Acesso a fluxogramas básicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Guias de estudo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Artigos selecionados</span>
                  </li>
                </ul>
                {/*
                <SignUpButton mode="modal">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Assinar Plano
                  </Button>
                </SignUpButton>
                */}
              </div>

              {/* Plano Profissional (Destaque) */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600 transform scale-105 z-10">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl">
                  MAIS POPULAR
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Profissional
                </h3>
                <p className="text-gray-600 mb-4">
                  Para médicos em prática clínica
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    R$00,00
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Todos os benefícios do Básico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Protocolos completos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Dosagens detalhadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                {/*
                <SignUpButton mode="modal">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Assinar Plano
                  </Button>
                </SignUpButton>
                */}
              </div>

              {/* Plano Premium */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Premium
                </h3>
                <p className="text-gray-600 mb-4">
                  Para equipes e instituições
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    R$00,00
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Todos os benefícios do Profissional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Até 5 usuários</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Treinamentos exclusivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Relatórios personalizados</span>
                  </li>
                </ul>
                {/*
                <SignUpButton mode="modal">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Assinar Plano
                  </Button>
                </SignUpButton>
                */}
              </div>
            </div>

            {/*
            <div className="text-center text-gray-600">
              <p>Todos os planos incluem 7 dias de avaliação gratuita.</p>
              <p>Cancelamento a qualquer momento.</p>
            </div>
*/}
          </div>
        </div>
      </section>

      {/* Seção Materiais Educativos Gratuitos */}
      <section id="materiais" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              <span className="border-b-4 border-purple-600 pb-2">
                Materiais Educativos Gratuitos
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Guia Prático de Pediatria
                </h3>
                <p className="text-gray-700 mb-4">
                  Um manual completo para os primeiros anos de vida, abordando
                  desde os cuidados com recém-nascidos até as principais doenças
                  infantis.
                </p>
                <Link href="/materiais">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Acessar Material
                  </Button>
                </Link>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Saúde Infantil: Perguntas e Respostas
                </h3>
                <p className="text-gray-700 mb-4">
                  As dúvidas mais comuns respondidas com base em evidências
                  científicas e experiência clínica.
                </p>
                <Link href="/materiais">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explorar Conteúdo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/materiais">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                  Ver Todos os Materiais Gratuitos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua prática médica?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Cadastre-se agora e comece sua avaliação gratuita de 7 dias.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/*
              <SignUpButton mode="modal">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold">
                  Comece Agora
                </Button>
              </SignUpButton>
              */}
              <Link href="/materiais">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Explorar Materiais Gratuitos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre o criador</h3>
              <p className="text-gray-300">Dr. Eliabe R. S.</p>
              <p className="text-gray-300">Médico Clínico Geral</p>
              <p className="text-gray-300">Residente de Pediatria</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#plataforma"
                    className="text-gray-300 hover:text-white"
                  >
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#precos"
                    className="text-gray-300 hover:text-white"
                  >
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/materiais"
                    className="text-gray-300 hover:text-white"
                  >
                    Materiais Gratuitos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-300">Email: elihelp.contato@gmail.com</p>
              <p className="text-gray-300">Redes Sociais: midia-aqui</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} EliHelp. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PlataformaLandingPage;
