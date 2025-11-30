export interface ChatMessage {
    sender: string;
    message: string;
    timestamp?: string;
      realSender?: string;  
  isAnon?: boolean;     
}
