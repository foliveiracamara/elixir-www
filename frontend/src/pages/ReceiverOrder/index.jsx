import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InputControlled from "../../components/InputControlled";
// import Select from "../../components/Select";
import Title from "../../components/Title";
import style from "./ReceiverOrder.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import Subtitle from "../../components/Subtitle";

import DropdownControlled from "../../components/DropdownControlled";

export default function ReceiverOrder() {
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const bloodtypes = [
    { label: "A+", value: "NY" },
    { label: "B+", value: "RM" },
    { label: "AB+", value: "LDN" },
    { label: "O+", value: "IST" },
    { label: "A-", value: "PRS" },
    { label: "B-", value: "PRS" },
    { label: "AB-", value: "PRS" },
    { label: "O-", value: "PRS" },
  ];

  const others = [
    { label: "Masculino", value: "M" },
    { label: "Feminino", value: "F" },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={style.container}>
      <div className={style.rigth_side}>
        <div className={style.block}></div>
        <img src={"/images/DoctorOrder.png"} className={style.doctor} />
      </div>
      <Header />

      <div className={style.content}>
        <Title fontSize={35} children={"Você precisa de transfusão?"} />
        <h3>Preencha as informações à seguir para solicitar uma doação:</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.questions}>
          <div className={style.name}>
            <InputControlled
              title="Nome Completo:"
              name="nome"
              id="nome"
              placeholder="Maria Luiza Amorim"
              errors={errors.nome}
              control={control}
            />
          </div>

          <div className={style.contentQuestions}>
            <div className={style.otherQuestions}>
              <div className={style.name}>
                <InputControlled
                  title="CPF:"
                  name="cpf"
                  id="cpf"
                  placeholder="405-897-958-60"
                  errors={errors.cpf}
                  control={control}
                />
              </div>
              <div className={style.name}>
                <InputControlled
                  title="Data de Nascimento:"
                  name="dtNascimento"
                  id="dtNascimento"
                  placeholder="04/04/2000"
                  errors={errors.dtNascimento}
                  control={control}
                />
              </div>
              <div className={style.name}>
                <InputControlled
                  title="Telefone:"
                  name="tel"
                  id="tel"
                  placeholder="09999-000"
                  errors={errors.tel}
                  control={control}
                />
              </div>
            </div>

            <div className={style.otherQuestionsBlood}>
              <div className={style.name}>
                <DropdownControlled
                  name="tipoSanguineo"
                  title="Tipo Sanguíneo:"
                  control={control}
                  options={bloodtypes}
                  errors={errors.tipoSanguineo}
                />
              </div>
              <div className={style.name}>
                <DropdownControlled
                  name="genero"
                  title="Gênero:"
                  control={control}
                  options={others}
                  errors={errors.genero}
                />
              </div>
              <div className={style.name}>
                <InputControlled
                  title="CEP do Hospital:"
                  name="cepHospital"
                  id="cepHospital"
                  placeholder="09540-300"
                  errors={errors.cepHospital}
                  control={control}
                />
              </div>
            </div>
          </div>
          <div className={style.name}>
            <InputControlled
              title="Nome do Hospital:"
              name="nomeHospital"
              id="nomeHospital"
              placeholder="Hospital ABC"
              errors={errors.nomeHospital}
              control={control}
            />
          </div>

          <div className={style.textInformations}>
            <h3>
              Somente as informações necessárias irão aparecer na lista de
              receptores na página dos doadores. Essas informações serão
              exlucídas em uma semana após a publicação. Para visualizar essa
              lista, faça <span>login</span> ou <span>cadastre-se.</span>
            </h3>
            <Button
              width="50%"
              backgroundColor="#FF2939"
              textColor="white"
              type="submit"
              label="Envie seu Pedido"
              fontFamily="PoppinsBolder"
              marginLeft="25%"
            />
            <Subtitle
              margin="2% 0 0 19%"
              fontSize="16px"
              label="Ao enviar, você aceita com os termos da plataforma"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
