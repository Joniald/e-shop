PGDMP                          y            deliverables    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    32884    deliverables    DATABASE     g   CREATE DATABASE deliverables WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Greek_Greece.1253';
    DROP DATABASE deliverables;
                postgres    false            �            1259    32898    cloth    TABLE     �   CREATE TABLE public.cloth (
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
       public          postgres    false    203            �           0    0    cloth_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.cloth_id_seq OWNED BY public.cloth.id;
          public          postgres    false    202            �            1259    32887    manufacturer    TABLE     �   CREATE TABLE public.manufacturer (
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
       public          postgres    false    201            �           0    0    manufacturer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.manufacturer_id_seq OWNED BY public.manufacturer.id;
          public          postgres    false    200            �            1259    32909    orderproduct    TABLE     �   CREATE TABLE public.orderproduct (
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
       public          postgres    false    205            �           0    0    orderproduct_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orderproduct_id_seq OWNED BY public.orderproduct.id;
          public          postgres    false    204            2           2604    32901    cloth id    DEFAULT     d   ALTER TABLE ONLY public.cloth ALTER COLUMN id SET DEFAULT nextval('public.cloth_id_seq'::regclass);
 7   ALTER TABLE public.cloth ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            1           2604    32890    manufacturer id    DEFAULT     r   ALTER TABLE ONLY public.manufacturer ALTER COLUMN id SET DEFAULT nextval('public.manufacturer_id_seq'::regclass);
 >   ALTER TABLE public.manufacturer ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            3           2604    32912    orderproduct id    DEFAULT     r   ALTER TABLE ONLY public.orderproduct ALTER COLUMN id SET DEFAULT nextval('public.orderproduct_id_seq'::regclass);
 >   ALTER TABLE public.orderproduct ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �          0    32898    cloth 
   TABLE DATA           d   COPY public.cloth (id, code, clink, mshortdescription, description, promo, price, name) FROM stdin;
    public          postgres    false    203   �       �          0    32887    manufacturer 
   TABLE DATA           l   COPY public.manufacturer (id, name, country, mlink01, mlink02, mdescription, mshortdescription) FROM stdin;
    public          postgres    false    201   '       �          0    32909    orderproduct 
   TABLE DATA           T   COPY public.orderproduct (id, orderdate, cloth, quantity, customercode) FROM stdin;
    public          postgres    false    205   �!       �           0    0    cloth_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cloth_id_seq', 15, true);
          public          postgres    false    202            �           0    0    manufacturer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.manufacturer_id_seq', 16, true);
          public          postgres    false    200            �           0    0    orderproduct_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orderproduct_id_seq', 8, true);
          public          postgres    false    204            7           2606    32906    cloth cloth_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cloth
    ADD CONSTRAINT cloth_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cloth DROP CONSTRAINT cloth_pkey;
       public            postgres    false    203            5           2606    32895    manufacturer manufacturer_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.manufacturer
    ADD CONSTRAINT manufacturer_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.manufacturer DROP CONSTRAINT manufacturer_pkey;
       public            postgres    false    201            9           2606    32917    orderproduct orderproduct_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.orderproduct
    ADD CONSTRAINT orderproduct_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.orderproduct DROP CONSTRAINT orderproduct_pkey;
       public            postgres    false    205            �   >  x�uT�R�H>KO�{�fDd��`�ao��ҒZ��h�;=�QNy�����$�#��
U>�3��~�,���f�4�������<O
{���}y�~8�����Y��|�qր�	�;"�'t���kJk�sd*AcN����KtO�j}�r�̆�Vƃ��QF5�7Q�F�E��^>��W�� ��]�˯�G��罭<֕��]7X��n�Fr�5	�uvo�e���a���)�X�{U��8	���2�(��{��qq*w����o��_#���;kKE���?ʴ�\��)���#jjrg����\����D�et���7����T��4:;��zq�e]mG<�Ϛ e ��ٶ�F�+dţ���|�梧
��
��Q��D1�m]!�)�aܱ�&��AQ�5�bd���+Q�X,��,Z@=�:�x�Q��f�jU�Mm[��>�AO-�;x$4���p̵r�'�p�<�� +���Qi":���n�y^�V��vx����'^Dc�~|��-{0�P_[�JH�΢O������w�%'j�q:��C*n���w���r`�Q�	���L#ن�%��h��a�����Zy�)pq�9_���;�a��K�%��ܒ��Y0�}V�ٓ)��L�����,y��`��S5��xe�������F:����ZI|���C�B%`Pɢ�Z�f��5�.���²,����vښ	̏�O���K3Y(w���fƋh~ ևy�iU�GX���Iy��E'���s+���!�Ԩ��PX��D�'�Ư!��R��3�T��EJ�	|&g�ƖR?�K*�wa�:�hݎ~�'���ݍ�~      �   a  x���n�F���S�-- �U�Ao����"#F�^��!��jG�J�O~���}0?Ig�v" ͩ�O<P���3���-9��..���N;��)D{O�xY�_���Ԗ���?��o����Z����̦*W�Z�.����d��uoyC`ؿ��ckكK2�o���ɂ���.� ���9�&��
�B�-����^]��hB��c^@I�!�[-i�>���7��.߮Ŗ�@�XZ]Cl5���(FV�iXhl-q
7�:�j���_RPu%eµ�O"%kÆ ��Jr�2�R+iY���]�5�m�d�F+[���$��*�E5��T�.�f��>��;�5���U	����kڤ�FC5. �ֆ��چ(uDp���-�����V�U�J+��M���u,�S�nIB�<C�T!<>��]L
�K�6�������ٛ"���T��p0š+��~<yo���W�ѥ�W���-�  |�c�1�
�mlO_�o����N�]�������O�� wA�9m�z���[�.��?�`�� ���]�P���!_�n즧�4jk:t6����?�]�PPS��o9��h�1�{.��;�8Z���ƕU�?R
A^��6+EJoߋ?e�\�1\�sc�"�B���ڡ�U����̍t.'��뜚'=���k����u=�Ǽ#����Ma�!�W�j��6���f>�k�|�0j�$�NK֣��m����a��8��{: ,�Kh�������'�tx���jR��H�������d���=Mp_�#�3��������ϯ�g}�Kq��T����g��<���⬸L��\�Zsh���X%������p��t4���#      �   S   x�e��
@PE��>㞿}�JJ�z޿(�2Y������W"�qV���?�bZ\)-��f�%,��d����L�ڈ�	+��     