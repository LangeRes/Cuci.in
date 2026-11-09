export type OrderProcessStatus =
  | "MENUNGGU"
  | "DITERIMA"
  | "DICUCI"
  | "DISETRIKA"
  | "SIAP_DIAMBIL"
  | "SELESAI";

export type OrderPaymentStatus = "UNPAID" | "PAID";
export type OrderType = "KILOAN" | "SATUAN";

type Relationship = {
  foreignKeyName: string;
  columns: string[];
  isOneToOne: boolean;
  referencedRelation: string;
  referencedColumns: string[];
};

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string;
          order_code: string;
          customer_id: string | null;
          service_id: string | null;
          pickup_address: string;
          contact_phone: string;
          notes: string | null;
          weight_kg: number | null;
          total_price: number | null;
          process_status: OrderProcessStatus;
          payment_status: OrderPaymentStatus;
          estimated_done_at: string | null;
          handled_by: string | null;
          paid_at: string | null;
          created_at: string;
          updated_at: string;
          customer_name: string | null;
          pickup_at: string | null;
          order_type: OrderType;
        };
        Insert: {
          order_code: string;
          pickup_address: string;
          contact_phone: string;
          customer_name?: string | null;
          customer_id?: string | null;
          service_id?: string | null;
          notes?: string | null;
          weight_kg?: number | null;
          total_price?: number | null;
          process_status?: OrderProcessStatus;
          payment_status?: OrderPaymentStatus;
          estimated_done_at?: string | null;
          handled_by?: string | null;
          paid_at?: string | null;
          created_at?: string;
          updated_at?: string;
          pickup_at?: string | null;
          order_type?: OrderType;
          id?: string;
        };
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
        Relationships: [
          Relationship & {
            foreignKeyName: "orders_service_id_fkey";
            columns: ["service_id"];
            referencedRelation: "services";
            referencedColumns: ["id"];
          },
        ];
      };
      services: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price_per_kg: number;
          estimated_days: number;
          is_active: boolean;
          created_at: string;
          slug: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          price_per_kg: number;
          estimated_days: number;
          is_active?: boolean;
          created_at?: string;
          slug?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["services"]["Insert"]>;
        Relationships: [];
      };
      laundry_items: {
        Row: {
          id: string;
          slug: string;
          name: string;
          price: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          price: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["laundry_items"]["Insert"]>;
        Relationships: [];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          item_id: string | null;
          item_name: string;
          unit_price: number;
          quantity: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          item_id?: string | null;
          item_name: string;
          unit_price: number;
          quantity: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["order_items"]["Insert"]>;
        Relationships: [
          Relationship & {
            foreignKeyName: "order_items_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          Relationship & {
            foreignKeyName: "order_items_item_id_fkey";
            columns: ["item_id"];
            referencedRelation: "laundry_items";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      process_status: OrderProcessStatus;
      payment_status: OrderPaymentStatus;
      order_type: OrderType;
    };
    CompositeTypes: Record<string, never>;
  };
}
