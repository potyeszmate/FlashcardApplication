import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, Query, CollectionReference } from '@angular/fire/compat/firestore';
import { Flashcard } from 'src/app/shared/modells/flashcard.model';


@Injectable({
  providedIn: 'root'
})
export class FbCrudService {

  //Flashcard properties
  public flashcardId: string = "";
  public engPhrase: string = "";
  public hunPhrase: string = "";
  public category: string = "";


  constructor(private afs: AngularFirestore) { }
  
  //Service for the CRUD functions


  //Get elements
  get(collectionName: string) : Observable<Flashcard[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<Flashcard[]>;
  }

  //getByid (get 1 element)
  getById(collectionName: string, id: string) : Observable<any>{
    return this.afs.collection(collectionName, ref => {
      let query:CollectionReference | Query = ref;
      query = query.orderBy('tilte', 'asc');
      return query;
    }).valueChanges() as Observable<Flashcard[]>;
  }

  //add
  async add(collectionName: string, data: Flashcard, id?: string): Promise<string> 
  {
    const uid = id ? id: this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    
    return uid;
  }
  
  /* //weakadd
  weakadd(collectionName: string, data: Flashcard) 
  {
      this.afs.collection(collectionName).add(data);
  } */

  //update
  update(collectionName: string,id: string, data: Flashcard){
    return this.afs.collection(collectionName).doc(id).update(data);
  } 

  //give id to an element
  giveID(collectionName: string,id: string, data: Flashcard){
    return this.afs.collection(collectionName).doc(id).update(data);
  }


  //delete
  delete(id: string){
    return this.afs.collection("flashcards").doc(id).delete();
    //this.afs.collection(collectionName).doc(uid).set(data);

  }


  //set flashcards properties
  setFlashcard(engPhrase: string, hunPhrase: string,category: string) {
    this.engPhrase = engPhrase;
    this.hunPhrase = hunPhrase;
    this.category = category;

  }

}