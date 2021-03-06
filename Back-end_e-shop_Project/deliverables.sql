PGDMP         9                y            deliverables    13.1    13.1 #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    32884    deliverables    DATABASE     g   CREATE DATABASE deliverables WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Greek_Greece.1253';
    DROP DATABASE deliverables;
                postgres    false                        3079    41076    pgcrypto 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
    DROP EXTENSION pgcrypto;
                   false            �           0    0    EXTENSION pgcrypto    COMMENT     <   COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
                        false    2            �            1259    32898    cloth    TABLE     �   CREATE TABLE public.cloth (
    id integer NOT NULL,
    code integer NOT NULL,
    clink text NOT NULL,
    mshortdescription text,
    description text NOT NULL,
    promo integer NOT NULL,
    price real,
    name text NOT NULL
);
    DROP TABLE public.cloth;
       public         heap    postgres    false            �            1259    32896    cloth_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cloth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.cloth_id_seq;
       public          postgres    false    204            �           0    0    cloth_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.cloth_id_seq OWNED BY public.cloth.id;
          public          postgres    false    203            �            1259    32887    manufacturer    TABLE     �   CREATE TABLE public.manufacturer (
    id integer NOT NULL,
    name text,
    country character varying(3),
    mlink01 text NOT NULL,
    mlink02 text NOT NULL,
    mdescription text,
    mshortdescription text
);
     DROP TABLE public.manufacturer;
       public         heap    postgres    false            �            1259    32885    manufacturer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.manufacturer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.manufacturer_id_seq;
       public          postgres    false    202            �           0    0    manufacturer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.manufacturer_id_seq OWNED BY public.manufacturer.id;
          public          postgres    false    201            �            1259    32909    orderproduct    TABLE     �   CREATE TABLE public.orderproduct (
    id integer NOT NULL,
    orderdate text NOT NULL,
    cloth text NOT NULL,
    quantity integer NOT NULL,
    customercode text NOT NULL
);
     DROP TABLE public.orderproduct;
       public         heap    postgres    false            �            1259    32907    orderproduct_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orderproduct_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orderproduct_id_seq;
       public          postgres    false    206            �           0    0    orderproduct_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orderproduct_id_seq OWNED BY public.orderproduct.id;
          public          postgres    false    205            �            1259    41115    users    TABLE     l   CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    41113    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    208            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    207            ^           2604    32901    cloth id    DEFAULT     d   ALTER TABLE ONLY public.cloth ALTER COLUMN id SET DEFAULT nextval('public.cloth_id_seq'::regclass);
 7   ALTER TABLE public.cloth ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            ]           2604    32890    manufacturer id    DEFAULT     r   ALTER TABLE ONLY public.manufacturer ALTER COLUMN id SET DEFAULT nextval('public.manufacturer_id_seq'::regclass);
 >   ALTER TABLE public.manufacturer ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    202    202            _           2604    32912    orderproduct id    DEFAULT     r   ALTER TABLE ONLY public.orderproduct ALTER COLUMN id SET DEFAULT nextval('public.orderproduct_id_seq'::regclass);
 >   ALTER TABLE public.orderproduct ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206            `           2604    41118    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            �          0    32898    cloth 
   TABLE DATA           d   COPY public.cloth (id, code, clink, mshortdescription, description, promo, price, name) FROM stdin;
    public          postgres    false    204   y$       �          0    32887    manufacturer 
   TABLE DATA           l   COPY public.manufacturer (id, name, country, mlink01, mlink02, mdescription, mshortdescription) FROM stdin;
    public          postgres    false    202   (       �          0    32909    orderproduct 
   TABLE DATA           T   COPY public.orderproduct (id, orderdate, cloth, quantity, customercode) FROM stdin;
    public          postgres    false    206   �+       �          0    41115    users 
   TABLE DATA           4   COPY public.users (id, email, password) FROM stdin;
    public          postgres    false    208   4,                   0    0    cloth_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cloth_id_seq', 17, true);
          public          postgres    false    203                       0    0    manufacturer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.manufacturer_id_seq', 17, true);
          public          postgres    false    201                       0    0    orderproduct_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orderproduct_id_seq', 19, true);
          public          postgres    false    205                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    207            d           2606    32906    cloth cloth_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cloth
    ADD CONSTRAINT cloth_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cloth DROP CONSTRAINT cloth_pkey;
       public            postgres    false    204            b           2606    32895    manufacturer manufacturer_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.manufacturer DROP CONSTRAINT manufacturer_pkey;
       public            postgres    false    202            f           2606    32917    orderproduct orderproduct_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.orderproduct
    ADD CONSTRAINT orderproduct_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.orderproduct DROP CONSTRAINT orderproduct_pkey;
       public            postgres    false    206            h           2606    41125    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    208            j           2606    41123    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    208            �   �  x��U�v�8^�Oqg�q0� �5ɐ4)iZr���nd�+�%FW����ì���$��=ә�,{�$]}�"��p�#Q8��''*TI��d}�뛓��8s<	��l���Rc�ښ&�����`�Fj��sF�pi�^CMJo�D"�K���@�"9��)"�h.޸��W�X��͸ �=`^�'���m�yeL����v���{HJ�>9��=j�k�m�ޤ���O��\ܪ'�i�`Q��"�ZR1����s3]�_��ϴóF�<@�֚:���e�&�����漥
��rJ:���E@��)f�S��QC+?f)Y�3YJ��"�����
.��1[D��@=�>{>����g�٩5e	�E*�4���eg"�M&xD������
e�=�Z9��^V*�݂��do�f�MTI�;�9T6ޙ��L��_q,�����_�X�-+�4��8p���X�c�,���='�hY-1��":���6������{o�҄���2l��8�(�B�a���߭��r�D��z�\!5��V�����{D����_�e�I�f��s�X��<���y^��\�6��C�\��$����{:����N|.�g.��m���A�����f���N��AQj0��mS=����0��]Ģ8��������br ��I�n�OzX��K�I9��X'�*�M&�K��M|�+(d���r�9
4HJ��'�ۜ����U�Yu��{h,M�Uq�V3�ZQ�a,�.��v�������7���@�X�������-	��Y��FgF'��Wv��ߕ�ׂ�@���u�����J��G�O��
؀�y�5o��A���'w�t=����M����ǺzȮ�g�k4���C9)���Պ1K�_|� ���c}      �   r  x���n�8���S̭�����6[���&�b�:h�b/#r$1�9I�qNy���}�<���5�-����t��Ù���(��ϋ33'8B?��.v��W䃹%]�qM�Ƹ�wvLi��T���a����l��ȓSt�i��j����Bm��G[��{�+��Y�_�1���$݆ِ,(<��p�y؟������a�F�Pm�e�Ov�4�8���1X�9T�Dr�%���gd��ql�˷kO��AY����!�}�����6	��c(��F�y��K
T�1�L��I$`̚ǰ&dI��J��*�,y��Ƭ諚�4M2X������$�n�킘�Z�͢�Z��.��e�8P�|�"a�!՚wM��<�hh��������6>ĉ8"8FE p�zKϺS1d�
�YJ��/iհ6QG�.[�P.��;Q�w��I��i�7}r�e1��(ro��%�	{]��j o ����x'yyxlJ-�R�h�&t��O�^qh1������Ư����ن�ŀ߀��o�xO��5�a�E���'�����������V�? ������6 �]m49�����TR���Кԋ~Hx3{{r&K���Jex����&j����;��K+��ް4B�;J!��d'�J�����"�/�6�b�h�.(�H���!�Dϯ��̍�6'bW�95Gr>$!�VJ:���P��}yG����Ia�!�W�4J��4m���|2����Da�RE�2-��{D��e�)�øqi�p 8F^@��gx���9q��[��sT�� ��G�&�X�o�<�/ m������;�8�kx}ϯ���zz֧�RK����zV���O0,N���b_k�:UB�>��B[��P��o�r�W9��v�e      �   �   x�u�=
1���a��_������e
Q0��Q!�L1߼�8�'�$�U�b9��G��I�S��n����w��!��%r���� wӼ�3l�}������MD�������@�����:���`���1�2���H�4�u;���<�      �   r   x�3�����K�Ou�M���K���T1JT10S�.Krr5q�L,��N2-
��*�+56���p)p2�*q�L-�շ�����*��v�2��7������˳�آҷ�+F��� ��$Y     